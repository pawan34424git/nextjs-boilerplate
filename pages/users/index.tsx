import MainContainer from "@/components/MainContainer";
import Table, { ITableColumnData, ITableRowData } from "@/components/Table";
import { IUser } from "@/models/UserModels";
import { getUserList } from "@/services/users.endpints";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const DEFAULT_NUMBER_OF_RECORD = 10;
const LOG_TAG = "UsersPage :: ";

export default function UsersPage() {
  const router = useRouter();
  const [noOfRecord, setNoOfRecord] = useState(DEFAULT_NUMBER_OF_RECORD);
  const [users, setUsers] = useState<ITableRowData[]>([]);

  const editUser = useCallback((data: ITableColumnData) => {
    router.push(`/users/${data.id}`);
  }, []);

  const callUserList = useCallback(async () => {
    try {
      const usersResponse = await getUserList(noOfRecord);

      const data: IUser[] = usersResponse.data;

      const tableData: ITableRowData[] = [];
      data.forEach((user) => {
        const row: ITableRowData = {};
        row[`UserId`] = { value: user.id, header: "User Id" };
        row[`Name`] = {
          value: `${user.firstName} ${user.lastName}`,
        };
        row[`Address`] = { value: user.address };
        row[`Contact`] = { value: user.contactNumber };
        row[`Action`] = { value: "Edit", cb: editUser, id: user.id };
        tableData.push(row);
      });
      setUsers(tableData);
    } catch (e) {
      console.log(`${LOG_TAG} Error while getUserList`, e);
    }
  }, [noOfRecord]);
  useEffect(() => {
    callUserList();
  }, [noOfRecord]);

  return (
    <MainContainer>
      <div className="min-w-full">
        <h1>User List</h1>
        <Table data={users}></Table>
      </div>
    </MainContainer>
  );
}
