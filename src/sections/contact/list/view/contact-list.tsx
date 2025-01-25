import { useMemo, useState, type FC } from "react";

import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useContactList } from "../../../../hook/use-contact-list";
import DeleteContactDialog from "../delete-contact-dialog";
import { TCreateList } from "../../create/schema/create-schema";

const TABLE_HEAD = [
  { id: "fullName", label: "First name - Last name" },
  { id: "age", label: "Age" },
  { id: "", label: "", width: 10 },
];

// ---------------------------------------------------------------------------------

const ContactList: FC = () => {
  const { dataContactList } = useContactList();

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [selected, setSelected] = useState<TCreateList | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  // --------------------------- Function ---------------------------

  const handleDeleteItem = (data: TCreateList) => {
    setSelected(data);

    setIsOpen(true);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // --------------------------- Value ---------------------------

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - dataContactList.length)
      : 0;

  const handleDataTable = useMemo(
    () =>
      [...dataContactList].slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [dataContactList, page, rowsPerPage]
  );

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <Typography variant="h6" p={2}>
            Contact List
          </Typography>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <TableHead>
                <TableRow>
                  {TABLE_HEAD.map((item) => (
                    <TableCell key={item.id} width={item.width}>
                      {item.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleDataTable.map((item) => (
                  <TableRow
                    key={`name-${item.name}-${item.age}`}
                    hover
                    tabIndex={-1}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell>{item.name}</TableCell>

                    <TableCell>{item.age}</TableCell>

                    <TableCell>
                      <IconButton onClick={() => handleDeleteItem(item)}>
                        <Box component="img" src="/img/trash.svg" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                <TableGapEmptry emptyRows={emptyRows} />
              </TableBody>

              <TableEmptry nodata={!handleDataTable} />
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={dataContactList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>

      {/* DIALOG */}

      <DeleteContactDialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        initialValue={selected}
      />
    </>
  );
};

export default ContactList;

// ---------------------------------------------------------------------------------

type TEmptyGapRows = {
  emptyRows: number;
};

const TableGapEmptry: FC<TEmptyGapRows> = ({ emptyRows }) => {
  if (emptyRows) {
    return (
      <TableRow
        style={{
          height: 53 * emptyRows,
        }}
      >
        <TableCell colSpan={3} />
      </TableRow>
    );
  }
};

type TEmptyRows = {
  nodata: boolean;
};

const TableEmptry: FC<TEmptyRows> = ({ nodata }) => {
  if (nodata) {
    return (
      <TableRow>
        <TableCell
          colSpan={3}
          sx={{
            p: 15,
            textAlign: "center",
            border: "none",
          }}
        >
          <Typography variant="body1" sx={{ color: "gray" }}>
            No data
          </Typography>
        </TableCell>
      </TableRow>
    );
  }
};
