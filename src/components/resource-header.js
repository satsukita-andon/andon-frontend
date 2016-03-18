import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from './icon';
import DateString from './date-string';

export default class ResourceHeader extends Component {
  render() {
    const { title, tags, createdBy, updatedBy, createdAt, updatedAt } = this.props;
    return (
      <div className="resource-header">
        <div className="container padding-container">
          <h1>{title}</h1>
          <ul className="tags">
            {tags.map((tag, i) => <li key={i}><Link className="resource-tag" to={`/howto/tags/${tag}`}>{tag}</Link></li>)}
          </ul>
          <div className="editors">
            <div>
              <Link to={`/users/${createdBy.login}`}>
                <Icon user={createdBy}/>
              </Link> が <DateString date={createdAt}/> に作成
            </div>
            {updatedAt !== createdAt &&
             <div>
               <Link to={`/users/${updatedBy.login}`}>
                 <Icon user={updatedBy}/>
               </Link> が <DateString date={updatedAt}/> に編集
             </div>}
          </div>
        </div>
      </div>
    );
  }
}
