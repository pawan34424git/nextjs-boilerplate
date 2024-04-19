import MainContainer from "@/components/MainContainer";
import Table from "@/components/Table";
import { IUser } from "@/models/UserModels";
import { getUserList } from "@/services/users.endpints";
import { useCallback, useEffect, useState } from "react";

const DEFAULT_NUMBER_OF_RECORD = 10;

export default function Page() {
  const [noOfRecord, setNoOfRecord] = useState(DEFAULT_NUMBER_OF_RECORD);
  const [users, setUsers] = useState<IUser[]>([]);

  const callUserList = useCallback(async () => {
    try {
      const usersResponse = await getUserList(noOfRecord);
      console.log("usersResponse", usersResponse);
    } catch (e) {
      console.log("Error while getUserList", e);
    }
  }, [noOfRecord]);
  useEffect(() => {
    callUserList();
  }, [noOfRecord]);

  return (
    <MainContainer>
      <div className="min-w-full">
        <h1>User List</h1>
        <Table></Table>
      </div>
    </MainContainer>
  );
}
