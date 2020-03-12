import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const handleError = (error) => {
    console.log(error);
    toast.error(error.message);
};

export default handleError;