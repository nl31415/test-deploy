import React, { Component } from "react";
import { Helmet } from "react-helmet";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <meta name="description" content="Text nay dai vkllllllll"></meta>

          <meta
            property="og:image"
            itemprop="thumbnailUrl"
            content="https://i1-vnexpress.vnecdn.net/2021/05/13/tau-ca-1-1378-1616552510-7367-5350-5771-1620896970.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OvCamskzQinehx-67z6Vog"
          ></meta>
        </Helmet>
        Homeeee
      </div>
    );
  }
}
