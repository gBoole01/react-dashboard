import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="FAQ" subtitle="Frequently Asked Questions" />
      </Box>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quos, impedit quo optio eos nam ab quasi saepe, et assumenda
            molestiae aut hic, ullam fugit. Cupiditate impedit, enim itaque unde
            aperiam libero nulla soluta consequuntur aut sunt harum eum fugiat
            ad magni doloremque natus qui quod repudiandae excepturi. Ratione,
            debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            A Very Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quos, impedit quo optio eos nam ab quasi saepe, et assumenda
            molestiae aut hic, ullam fugit. Cupiditate impedit, enim itaque unde
            aperiam libero nulla soluta consequuntur aut sunt harum eum fugiat
            ad magni doloremque natus qui quod repudiandae excepturi. Ratione,
            debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quos, impedit quo optio eos nam ab quasi saepe, et assumenda
            molestiae aut hic, ullam fugit. Cupiditate impedit, enim itaque unde
            aperiam libero nulla soluta consequuntur aut sunt harum eum fugiat
            ad magni doloremque natus qui quod repudiandae excepturi. Ratione,
            debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            One more Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quos, impedit quo optio eos nam ab quasi saepe, et assumenda
            molestiae aut hic, ullam fugit. Cupiditate impedit, enim itaque unde
            aperiam libero nulla soluta consequuntur aut sunt harum eum fugiat
            ad magni doloremque natus qui quod repudiandae excepturi. Ratione,
            debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Just a Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quos, impedit quo optio eos nam ab quasi saepe, et assumenda
            molestiae aut hic, ullam fugit. Cupiditate impedit, enim itaque unde
            aperiam libero nulla soluta consequuntur aut sunt harum eum fugiat
            ad magni doloremque natus qui quod repudiandae excepturi. Ratione,
            debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Is this a Question ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quos, impedit quo optio eos nam ab quasi saepe, et assumenda
            molestiae aut hic, ullam fugit. Cupiditate impedit, enim itaque unde
            aperiam libero nulla soluta consequuntur aut sunt harum eum fugiat
            ad magni doloremque natus qui quod repudiandae excepturi. Ratione,
            debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
