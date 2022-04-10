import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatatablesource";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deletePost, getPosts } from "../../actions/posts";

export const postsColumns = [
  {
    field: "_id",
    headerName: "Post ID",
    width: 100,
  },
  {
    field: "title",
    headerName: "Post Title",
    width: 100,
  },
  {
    field: "creator",
    headerName: "Post Creator",
    width: 200,
  },
  {
    field: "message",
    headerName: "Post message",
    width: 150,
  },
];

const Datatable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getPosts());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);

  const handleDelete = (value) => {
    dispatch(deletePost(value));
    dispatch(getPosts());
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div
              className="deleteButton"
              onClick={() => {
                handleDelete(params.row._id);
              }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        getRowId={(row) => row._id}
        rows={posts}
        columns={postsColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
