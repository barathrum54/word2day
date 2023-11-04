import React from 'react';
import { Container, Typography, Stack, Tooltip, Grid, Chip, Link, IconButton } from '@mui/material';
import './style.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const DescriptionWrapper: React.FC = () => {
  const { word } = useSelector((state: RootState) => state.wordStore);
  const description = word?.meanings;
  const wikiLink = word?.sourceUrls[0]
  const toolTip = (type: string) => {
    let definiton = "";
    if (type === "noun") definiton = "Names a person, place, or thing";
    if (type === "verb") definiton = "Describes an action";
    if (type === "interjection") definiton = "Expresses strong emotion or exclamation";
    return (
      <Tooltip placement='left-start' title={definiton}>
        <Chip label={type} sx={{ cursor: "help" }}
          icon={<ContactSupportIcon fontSize={"small"} />} />
      </Tooltip>
    );

  };

  return (
    <Container className="DescriptionWrapper" sx={{ display: 'flex', flexFlow: 'column', justifyContent: "center", alignItems: "center" }} >
      <Typography sx={{ width: "100%", textAlign: 'center', marginBottom: "20px" }} variant='h5' >Which means</Typography>
      {
        description &&
        <>
          <Grid container direction="column" >
            {description && description.map((item: any, index: any) => (
              index < 3 &&
              <Grid item style={{ height: "auto" }}>
                <Stack direction="row" alignItems={"center"} gap={2} sx={{ marginBottom: "10px" }}>
                  {toolTip(item.partOfSpeech)}
                  <div>
                    <Typography>{item.definitions[0].definition}</Typography>
                  </div>
                </Stack>
              </Grid>
            ))}
            {
              wikiLink &&
              <Grid item >
                <Grid container sx={{ alignItems: "center", gap: 1, justifyContent: "center" }}>
                  <Grid item>
                    <IconButton >
                      <img src="wiki.png" style={{ objectFit: 'contain', height: '25px', width: '25px' }} alt="" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Link target="_blank" href={wikiLink} rel="noreferrer">Wiki page of word</Link>
                  </Grid>
                </Grid>
              </Grid>
            }
          </Grid>
        </>
      }

    </Container >
  );
};

export default DescriptionWrapper;
