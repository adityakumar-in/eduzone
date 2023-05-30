// Node Modules is not Included in this folder kindly run this - 'npm run' to install it, as it is required to run the website

import React, { Component } from 'react';
import './PaddingStyle.css';
import './HomeStyle.css';
import Card from './Card';
import cardDetails from './details.json';

export default class Home extends Component {
  render() {
    return (
      <div className='container wrapper'>
        <Card title={cardDetails["1"]["title"]} description={cardDetails["1"]["description"]} videoUrl={cardDetails["1"]["videoUrl"]}/>
        <Card title={cardDetails["2"]["title"]} description={cardDetails["2"]["description"]} videoUrl={cardDetails["2"]["videoUrl"]}/>
        <Card title={cardDetails["3"]["title"]} description={cardDetails["3"]["description"]} videoUrl={cardDetails["3"]["videoUrl"]}/>
        <Card title={cardDetails["4"]["title"]} description={cardDetails["4"]["description"]} videoUrl={cardDetails["4"]["videoUrl"]}/>
        <Card title={cardDetails["5"]["title"]} description={cardDetails["5"]["description"]} videoUrl={cardDetails["5"]["videoUrl"]}/>
        <Card title={cardDetails["6"]["title"]} description={cardDetails["6"]["description"]} videoUrl={cardDetails["6"]["videoUrl"]}/>
        <Card title={cardDetails["7"]["title"]} description={cardDetails["7"]["description"]} videoUrl={cardDetails["7"]["videoUrl"]}/>
        <Card title={cardDetails["8"]["title"]} description={cardDetails["8"]["description"]} videoUrl={cardDetails["8"]["videoUrl"]}/>
        <Card title={cardDetails["9"]["title"]} description={cardDetails["9"]["description"]} videoUrl={cardDetails["9"]["videoUrl"]}/>
        <Card title={cardDetails["10"]["title"]} description={cardDetails["10"]["description"]} videoUrl={cardDetails["10"]["videoUrl"]}/>
        <Card title={cardDetails["11"]["title"]} description={cardDetails["11"]["description"]} videoUrl={cardDetails["11"]["videoUrl"]}/>
        <Card title={cardDetails["12"]["title"]} description={cardDetails["12"]["description"]} videoUrl={cardDetails["12"]["videoUrl"]}/>
        <Card title={cardDetails["13"]["title"]} description={cardDetails["13"]["description"]} videoUrl={cardDetails["13"]["videoUrl"]}/>
        <Card title={cardDetails["14"]["title"]} description={cardDetails["14"]["description"]} videoUrl={cardDetails["14"]["videoUrl"]}/>
        <Card title={cardDetails["15"]["title"]} description={cardDetails["15"]["description"]} videoUrl={cardDetails["15"]["videoUrl"]}/>
        <Card title={cardDetails["16"]["title"]} description={cardDetails["16"]["description"]} videoUrl={cardDetails["16"]["videoUrl"]}/>
        <Card title={cardDetails["17"]["title"]} description={cardDetails["17"]["description"]} videoUrl={cardDetails["17"]["videoUrl"]}/>
        <Card title={cardDetails["18"]["title"]} description={cardDetails["18"]["description"]} videoUrl={cardDetails["18"]["videoUrl"]}/>
        <Card title={cardDetails["19"]["title"]} description={cardDetails["19"]["description"]} videoUrl={cardDetails["19"]["videoUrl"]}/>
        <Card title={cardDetails["20"]["title"]} description={cardDetails["20"]["description"]} videoUrl={cardDetails["20"]["videoUrl"]}/>
        <Card title={cardDetails["21"]["title"]} description={cardDetails["21"]["description"]} videoUrl={cardDetails["21"]["videoUrl"]}/>
        <Card title={cardDetails["22"]["title"]} description={cardDetails["22"]["description"]} videoUrl={cardDetails["22"]["videoUrl"]}/>
        <Card title={cardDetails["23"]["title"]} description={cardDetails["23"]["description"]} videoUrl={cardDetails["23"]["videoUrl"]}/>
        <Card title={cardDetails["24"]["title"]} description={cardDetails["24"]["description"]} videoUrl={cardDetails["24"]["videoUrl"]}/>
      </div>
    )
  }
}
