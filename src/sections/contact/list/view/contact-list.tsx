import { KeyboardEvent, useMemo, useState, type FC } from "react";

import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useContactList } from "../../../../hook/use-contact-list";
import DeleteContactDialog from "../delete-contact-dialog";
import { TCreateList } from "../../create/schema/create-schema";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const TABLE_HEAD = (t: TFunction) => [
  { id: "fullName", label: t("contact.list.table_title_fullname") },
  { id: "age", label: t("contact.list.table_title_age") },
  { id: "", label: "", width: 10 },
];

// ---------------------------------------------------------------------------------

const ContactList: FC = () => {
  const { dataContactList } = useContactList();

  const { t } = useTranslation();

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [selected, setSelected] = useState<TCreateList | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [confirmSearch, setConfirmSearch] = useState("");

  // --------------------------- Value ---------------------------

  const disabledBtnSearch = search.length <= 2;

  const filterSearchDataContact = useMemo(
    () =>
      [...dataContactList].filter((item) =>
        item.name.toLowerCase().match(confirmSearch.toLowerCase())
      ),
    [confirmSearch, dataContactList]
  );

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - filterSearchDataContact.length)
      : 0;

  const handleDataTable = useMemo(
    () =>
      filterSearchDataContact.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [filterSearchDataContact, page, rowsPerPage]
  );

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

  const handleSearch = () => {
    if (disabledBtnSearch) {
      return;
    }

    setConfirmSearch(search);
  };

  const handleEnterSearch = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!search && e.keyCode === 13) {
      clearSearch();
      return;
    }

    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearch("");
    setConfirmSearch("");
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">{t("contact.list.title")}</Typography>

      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <TextField
          label={t("contact.list.input_search")}
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleEnterSearch}
          fullWidth
        />

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="primary" onClick={clearSearch}>
            {t("button.clear")}
          </Button>

          <Button
            variant="outlined"
            color="primary"
            disabled={disabledBtnSearch}
            onClick={handleSearch}
          >
            {t("button.search")}
          </Button>
        </Stack>
      </Stack>

      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <TableHead>
                <TableRow>
                  {TABLE_HEAD(t).map((item) => (
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

                <TableEmptry
                  nodata={!filterSearchDataContact.length}
                  initialValue={!dataContactList.length}
                />
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 100]}
            component="div"
            count={filterSearchDataContact.length}
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
    </Stack>
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
  initialValue: boolean;
};

const TableEmptry: FC<TEmptyRows> = ({ nodata, initialValue }) => {
  const nagigate = useNavigate();

  const { t } = useTranslation();

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
          <Stack alignItems="center" spacing={2}>
            <Typography variant="h4" color="textDisabled">
              {t("contact.list.table_emptry_title")}
            </Typography>

            {initialValue && (
              <Button
                variant="text"
                color="primary"
                sx={{ width: "max-content", m: "auto" }}
                onClick={() => nagigate("/contact/create")}
              >
                {t("contact.list.table_emptry_button")}
              </Button>
            )}
          </Stack>
        </TableCell>
      </TableRow>
    );
  }
};
