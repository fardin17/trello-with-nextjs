import Link from "next/link";

const productList = [
  {
    id: 1,
    name: "product 1",
    description: "this is description",
  },
  {
    id: 2,
    name: "product 2",
    description: "this is description 2",
  },
  {
    id: 3,
    name: "product 3",
    description: "this is description 3",
  },
];

const Page = () => {
  return (
    <div>
      {productList.map((product) => (
        <div
          key={product.id}
          className=" px-4 py-2 bg-red-500 rounded mb-4 w-[300px]"
        >
          <Link href={`/product/${product.id}`}>
            <div>{product.name}</div>
            <div>{product.description}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
