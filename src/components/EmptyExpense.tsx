const EmptyExpense = () => {
  return (
    <tr>
      <td
        colSpan={3}
        className="px-5 py-5 text-sm bg-white border-b border-gray-200"
      >
        <p className=" font-medium text-gray-600 whitespace-no-wrap text-md text-end">
          There is no Expense Lists.Please add Expenses..
        </p>
      </td>
    </tr>
  );
};

export default EmptyExpense;
