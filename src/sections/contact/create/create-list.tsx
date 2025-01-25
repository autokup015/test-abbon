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

const REGEX_NUMBER = /$^|^[0-9]+$/;

// ---------------------------------------------------------------------------------

const CreateList: FC = () => {
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
      <Box>
        <Card sx={{ p: 2 }}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6">Create List</Typography>

            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    {...register("name")}
                    fullWidth
                    label="Firstname - Surname"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors ? errors?.name?.message : ""}
                  />
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    onChange={onChangeAge}
                    fullWidth
                    label="Age"
                    variant="outlined"
                    value={getValueAge === 0 ? "" : getValueAge}
                    error={!!errors.age}
                    helperText={errors ? errors?.age?.message : ""}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box textAlign="end">
                    <Button variant="contained" color="primary" type="submit">
                      สร้าง
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Stack>
        </Card>
      </Box>

      {/* DIALOG */}

      <TextDialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          
          navigate("/contact/list");
        }}
        title="Success"
        description="Create contact success"
      />
    </>
  );
};

export default CreateList;
