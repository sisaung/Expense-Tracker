import EmptyExpense from "./EmptyExpense";
import ExpenseListItem from "./ExpenseListItem";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
}

const ExpenseList = ({ expenses, onDeleteExpense }: Props) => {
  console.log(expenses.length);

  return (
    <>
      <div className="w-full bg-white rounded-md">
        <div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                      ID
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Description
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200 text-end">
                      Amount
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200 text-end">
                      Category
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"></th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.length === 1 ? (
                    <EmptyExpense />
                  ) : (
                    expenses.map((expense, index) => (
                      <ExpenseListItem
                        onDeleteExpense={onDeleteExpense}
                        key={expense.id}
                        index={index}
                        expense={expense}
                      />
                    ))
                  )}
                  {/* {} */}
                </tbody>
                {expenses.length > 1 && (
                  <tfoot>
                    <tr>
                      <td
                        colSpan={3}
                        className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                      >
                        <p className="font-medium text-gray-900 whitespace-no-wrap text-md text-end">
                          Total
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="font-medium text-gray-900 whitespace-no-wrap text-md text-end">
                          $
                          {expenses
                            .reduce((pv, expense) => pv + expense.amount, 0)
                            .toFixed(2)}
                        </p>
                      </td>
                    </tr>
                  </tfoot>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
