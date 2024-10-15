import AddPage from "@/components/template/AddPage";
import connectDB from "@/utils/connectDB";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";

export const maxDuration = 30;
const Add = async () => {
  await connectDB();
  const session = await getSession();
  if (!session) {
    redirect("/signin");
  }
  return <AddPage />;
};

export default Add;
