import { useEffect, useState } from 'react';
import ClientError from '../../error/ClientError';
import { ServerError, ServerErrorResponse } from '../../error/ServerError';
export interface FetchStatus<D> {
    readonly loading: boolean;
    readonly data?: D;
    readonly error?: ServerError | ClientError;
}

export function useFetch<D>(url: RequestInfo | URL, options: RequestInit): FetchStatus<D> {
    const [status, setStatus] = useState<FetchStatus<D>>({
        loading: false,
    });

    const fetchNow: () => Promise<void> = async () => {
        setStatus({ loading: true });
        await fetch(url, options)
            .then(async response => {
                if (response.ok) {
                    return await response.json();
                }

                return await Promise.reject(response);
            })
            .then(raw => raw as D)
            .then((data: D) => {
                setStatus({ loading: false, data });
            })
            .catch(async error => {
                if (error instanceof Response) {
                    const serverErrorResponce: ServerErrorResponse = await error.json();
                    const serverError = new ServerError(
                        serverErrorResponce.code,
                        serverErrorResponce.message,
                        serverErrorResponce.status,
                        serverErrorResponce.trace,
                    );
                    setStatus({ loading: false, error: serverError });
                } else if (error instanceof Error) {
                    const clientError = new ClientError(error.message);
                    setStatus({ loading: false, error: clientError });
                    console.log(clientError);
                }
            });
    };

    useEffect(() => {
        void (async () => {
            await fetchNow();
        })();
    }, []);

    return status;
}
