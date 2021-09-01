import React, { Fragment } from "react";
import { Column, Section, Title, Container, Card, Button } from "rbx";
import "../../../styles/users.scss";
import UsersEditForm from "../../../components/users/userEditForm/index.js";
import UsersEditFormPassword from "../../../components/users/userEditPasswordForm/index.js";
import UsersDelete from "../../../components/users/userDelete/index.js";
import HeaderLogged from "../../../components/header_logged";

const UsersEditScreen = () => {
  return (
    <Fragment>
      <HeaderLogged />
      <Section size="medium" className="users">
        <Container>
          <Column.Group centered className="users-edit">
            <Column size={4}>
              <Title size={5} className="has-text-grey has-text-left">
                Your personal information
              </Title>
              <Card>
                <Card.Content>
                  <UsersEditForm />
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>

          <Column.Group centered className="users-edit">
            <Column size={4}>
              <Title size={5} className="has-text-grey has-text-left">
                Password
              </Title>
              <Card>
                <Card.Content>
                  <UsersEditFormPassword />
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
          <Column.Group centered>
            <Column size={4} className="has-text-right">
              <UsersDelete />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </Fragment>
  );
};

export default UsersEditScreen;
