import SkudEvent from './SkudEvent';
import StudentStatus from './StudentStatus';

interface StudentDisplay {
    readonly id: number;
    readonly name: string;
    readonly surname: string;
    readonly patronymic: string;
    readonly lastEvent: SkudEvent;
    readonly status: StudentStatus;
}

export default StudentDisplay;
