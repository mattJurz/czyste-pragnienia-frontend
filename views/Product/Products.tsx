import { gql, useQuery } from "@apollo/client";
import { useTheme } from "@mui/material/styles";
import Main from "layouts/Main";
import Container from "components/Container";
import { Hero, PromoNumbers } from "./components";

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      name
      photo {
        image {
          publicUrl
        }
      }
    }
  }
`;

const Products = (): JSX.Element => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  const theme = useTheme();

  return (
    <Main>
      <Hero />
      <Container>
        <PromoNumbers />
      </Container>
    </Main>
  );
};

export default Products;
