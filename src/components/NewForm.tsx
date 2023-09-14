import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  Description: z
    .string({ invalid_type_error: "Description type required" })
    .min(3),
  Amount: z.number({ invalid_type_error: "Amount required" }),
  Categories: z.string({ invalid_type_error: "Category type required" }),
});
type FormData = z.infer<typeof schema>;
const NewForm = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onsubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input
          id="Description"
          type="text"
          className="form-control"
          {...register("Description")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          id="Amount"
          type="text"
          className="form-control"
          {...register("Amount")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Categories" className="form-label">
          Categories
        </label>
        <select
          className="form-select"
          id="Categories"
          {...register("Categories")}
        >
          <option>Groceries</option>
          <option>Utility</option>
          <option>Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewForm;
