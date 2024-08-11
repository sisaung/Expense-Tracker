import category from "../data/Categories";
import ExpenseFilterItem from "./ExpenseFilterItem";

interface Props {
  onSelect: (e: string) => void;
}
const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <div className="py-8 w-1/2">
      <select
        onChange={(e) => onSelect(e.target.value)}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">All Categories</option>
        {category.map((c, index) => (
          <ExpenseFilterItem key={index} category={c} />
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
