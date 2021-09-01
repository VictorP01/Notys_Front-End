import React, { Fragment } from "react";
import LoginForm from "../../../components/auth/login_form";
import Header from "../../../components/header";
import { Column, Section, Title, Container, Card } from "rbx";
import logoImage from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";

const LoginScreen = () => {
  return (
    <Fragment>
      <Header />
      <Section className="auth login">
        <Container>
          <Column.Group centered>
            <Column size={4} className="column-style">
              <Card>
                <Card.Content>
                  <Container>
                    <Column.Group centered>
                      <Column size={8}>
                        <img src={logoImage} alt="logo" />
                      </Column>
                    </Column.Group>

                    <Column.Group>
                      <Column size={12}>
                        <Title
                          size={6}
                          className="has-text-grey has-text-centered"
                        >
                          Your notes on the cloud
                        </Title>
                      </Column>
                    </Column.Group>
                  </Container>
                  <LoginForm />
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </Fragment>
  );
};

export default LoginScreen;
