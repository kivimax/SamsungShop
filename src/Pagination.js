import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({ onChangePage, totalItems }) {
  const handleChange = (event, page) => {
    onChangePage(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination color="primary" onChange={handleChange} count={totalItems} />
    </Stack>
  );
}
