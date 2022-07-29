import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export interface ICharacter {
  name: string;
  id?: string;
  class?: {
    id?: string;
    name?: string;
  };
}

export interface ICharactersListProps {
  characters: ICharacter[];
}

export default function CharactersList(props: ICharactersListProps) {
  return (
    <Stack spacing={2}>
      {props.characters.map((c, idx) => (
        <Paper key={idx}>
          <Link href={"characters/" + (c.id || "create")}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {c.name}
                </Typography>
                {c.class && (
                  <Typography variant="subtitle1">
                    Класс: {c.class.name}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Link>
        </Paper>
      ))}
    </Stack>
  );
}
