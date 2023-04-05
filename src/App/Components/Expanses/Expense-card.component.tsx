import './Expense-card.component.scss'
import { Button } from 'react-bootstrap';
const ExpenseCard = () => {
    return (
        <div>
            <h3 className='hoba'>title</h3>
            <h3>date</h3>
            <h3>amount</h3>
            <Button variant="primary" className="mr-1">
                remove
            </Button>
        </div>
    );
};

export default ExpenseCard;