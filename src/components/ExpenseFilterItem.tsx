interface Props {
  category: string;
}

const ExpenseFilterItem = ({ category }: Props) => {
  return (
    <>
      <option value={category}> {category} </option>
    </>
  );
};

export default ExpenseFilterItem;
