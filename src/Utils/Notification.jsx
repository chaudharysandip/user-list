import { toast } from 'react-toastify';

const showSuccess = (msg) => {
    toast.success(msg);
};

const showWarning = (msg) => {
    toast.warn(msg);
};

const showInfo = (msg) => {
    toast.info(msg);
};

const showError = (errMsg) => {
    toast.error(errMsg);
};

const handleError = (err) => {
    const error = err.res.data;
    if (typeof err.msg === 'string') {
        showError(error.msg);
    }
};

const expVar = {
    showSuccess,
    showWarning,
    showInfo,
    showError,
    handleError,
};
export default expVar;