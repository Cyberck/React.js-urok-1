import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="add-add-form">
            <h3>Dobavte novogo sotrudnika</h3>
            <form className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Kak ego zovut?" />

                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Z\P v $?" />

                <button className="btn btn-outline-light">Dobavit</button>
            </form>
        </div>
    );
}

export default EmployeesAddForm;