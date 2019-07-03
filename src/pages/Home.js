import React, { Component } from 'react';
import {
  Button,
  Column,
  Content,
  Grid,
  InputText,
  Layout,
  Loader,
  Wrapper,
  Heading,
} from 'react-simple-responsive-framework';
import { connect } from 'react-redux';
import {
  fetch,
  addParameters,
  editParameters,
  deleteParameters,
} from '../action';
import {
  CategoryList,
  ErrorField,
} from '../component';

export class Home extends Component {
    state = {
      categories: [],
      name: null,
      agreeToTerms: false,
    };

    componentDidMount() {
      this.props.fetch();
    }

    save = (categories, name, agreeToTerms) => {
      const category = [];
      categories.forEach((item) => {
        category.push({
          relationId: item.id,
          name,
          status: agreeToTerms,
        });
      });
      this.props.addParameters(
        category.length === 0
          ? [{ relationId: null, name: null, status: false }]
          : category
      );
    };

    edit = (categories, name, agreeToTerms) => {
      const category = [];
      categories.forEach((item) => {
        category.push({
          id: item.id,
          relationId: item.relationId,
          name,
          status: agreeToTerms,
        });
      });
      this.props.editParameters(category);
    };

    delete = (categories) => {
      this.props.deleteParameters(categories);
    };

    collect = item => this.setState({ categories: item });


    addName = (event) => {
      this.setState({
        name: event.target.value,
      });
    };

    render() {
      const { data, errorMessages, loader } = this.props;
      const { categories, name, agreeToTerms } = this.state;
      return (
        <Layout
          sideMenu
          fullScreen={false}
          sideMenuComponents={[
            <Heading key="heading" text="Sectors" type="h6">Test</Heading>,
            <CategoryList
              key="category_list"
              data={data}
              relationId={null}
              collector={this.collect}
              selectedCategory={categories}
            />,
          ]}
        >
          <Wrapper variant="rounded">
            <Content>
              <Grid>
                <Column width="12">
                  <p>
                        Please enter your name and pick the Sectors you are currently involved in.
                  </p>
                  <InputText
                    variant="rounded"
                    type="text"
                    onChange={this.addName}
                  />
                </Column>
                <ErrorField errors={errorMessages} />
                <Column width="12">
                  <input
                    type="checkbox"
                    onChange={() => this.setState({ agreeToTerms: !agreeToTerms })}
                  />
                  <span>Agree to terms</span>
                </Column>
                <Column width="3">
                  <Button
                    variant="rounded"
                    text="Save"
                    onClick={() => this.save(categories, name, agreeToTerms)}
                  />
                </Column>
                <Column width="3">
                  <Button
                    variant="rounded"
                    text="Edit"
                    onClick={() => this.edit(categories, name, agreeToTerms)}
                  />
                </Column>
                <Column width="3">
                  <Button
                    variant="rounded"
                    text="Delete"
                    onClick={() => this.delete(categories)}
                  />
                </Column>
                <Column width="3">
                  <Loader
                    className="custom-loader"
                    isHidden={!loader}
                  />
                </Column>
              </Grid>
            </Content>
          </Wrapper>
        </Layout>
      );
    }
}

export default connect(
  state => ({
    data: state.category.category,
    loader: state.category.loader,
    errorMessages: state.category.errorMessages,
  }),
  {
    fetch,
    addParameters,
    editParameters,
    deleteParameters,
  }
)(Home);
