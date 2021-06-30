// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { GetAlbumPhotos } from "../../redux/actions/album";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
} from "reactstrap";

import "./album.css";

const AlbumPage = () => {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const { err, response, photos } = useSelector((state) => state);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = () => {
    if (searchInput !== "") {
      dispatch(GetAlbumPhotos(searchInput));
    }
  };

  useEffect(() => {
    if (response) {
      setSearchInput("");
      console.log(photos);
    }
    if (err) {
      console.log(err);
      setSearchInput("");
    }
  }, [err, response, photos]);
  return (
    <Container fluid="">
      <h1>Album photos</h1>
      <Row>
        <Col className="col">
          <Form id="SearchForm">
            <FormGroup>
              <Input
                type="number"
                name="album"
                id="albumId"
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="Search with album id!"
              />
            </FormGroup>
          </Form>
        </Col>
        <Col className="col">
          <Button onClick={handleSubmit} className="search-btn">
            Get Album Photos By Id
          </Button>
        </Col>
      </Row>

      <Row>
        {photos.map((photo, index) => (
          <Col className="col" sm="3">
            <Card body>
              <CardTitle tag="h5">{photo.title}</CardTitle>
              <img width="100%" src={photo.thumbnailUrl} alt={photo.url} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AlbumPage;
