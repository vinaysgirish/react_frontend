import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL='http://localhost:8090/api/shiva/employees';
class EmployeeViewService {

    getAllEmployees()
    {
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    createEmployee(emp)
    {
        return axios.get(EMPLOYEE_BASE_REST_API_URL,emp);
    }
}
export default new EmployeeViewService();