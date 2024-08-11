import { useForm } from "react-hook-form";
import category from "../data/Categories";
import ExpenseFilterItem from "./ExpenseFilterItem";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1, { message: "Amount must be at least 1" })
    .max(100_000),
  category: z.enum(category, {
    errorMap: () => ({
      message: "Category is required",
    }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <div className="py-5">
      <form
        className="w-1/2"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="description"
            id="description"
            {...register("description")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.description && (
            <p className="text-red-500"> {errors.description.message} </p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            {...register("amount", { valueAsNumber: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.amount && (
            <p className="text-red-500"> {errors.amount.message} </p>
          )}
        </div>

        <select
          id="category"
          {...register("category")}
          className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">All Categories</option>
          {category.map((c, index) => (
            <ExpenseFilterItem key={index} category={c} />
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 mb-5"> {errors.category.message} </p>
        )}

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
