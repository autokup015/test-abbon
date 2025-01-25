import { useState, type ChangeEvent, type FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { CreateListSchema, TCreateList } from "./schema/create-schema";
import { useContactList } from "../../../hook/use-contact-list";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import TextDialog from "../../../components/dialog/text-dialog";
import { useTranslation } from "react-i18next";

const REGEX_NUMBER = /$^|^[0-9]+$/;

// ---------------------------------------------------------------------------------

const CreateList: FC = () => {
  const { t } = useTranslation();

  const { onSaveData } = useContactList();

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  // --------------------------- Schema ---------------------------

  const defaultValues = {
    id: "",
    name: "",
    age: 0,
  };

  const methods = useForm<TCreateList>({
    resolver: zodResolver(CreateListSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  // --------------------------- Function ---------------------------

  const onSubmit = (data: TCreateList) => {
    onSaveData({ ...data, id: uuidv4() });

    setIsOpen(true);
  };

  // ! may be not use this because validate is can prove it
  const onError = () => console.log("errors", errors);

  const onChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    const getValue = e.target.value;

    if (!REGEX_NUMBER.test(getValue)) {
      return;
    }

    const finalValue = getValue === "" ? 0 : Number(getValue);

    setValue("age", finalValue, { shouldValidate: true });
  };

  // --------------------------- Value ---------------------------

  const getValueAge = watch("age");

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h6">{t("contact.create.title")}</Typography>

        <Card sx={{ p: 2 }}>
          <Stack direction="column" spacing={2}>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    {...register("name")}
                    fullWidth
                    label={t("contact.create.input_label_fullname")}
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors ? errors?.name?.message : ""}
                  />
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    onChange={onChangeAge}
                    fullWidth
                    label={t("contact.create.input_label_age")}
                    variant="outlined"
                    value={getValueAge === 0 ? "" : getValueAge}
                    error={!!errors.age}
                    helperText={errors ? errors?.age?.message : ""}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box textAlign="end">
                    <Button variant="contained" color="primary" type="submit">
                      {t("button.create")}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Stack>
        </Card>
      </Stack>

      {/* DIALOG */}

      <TextDialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);

          navigate("/contact/list");
        }}
        title={t("contact.create.dialog_create_title")}
        description={t("contact.create.dialog_create_description")}
      />
    </>
  );
};

export default CreateList;
