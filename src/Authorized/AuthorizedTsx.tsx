import React from 'react';
import { Result } from 'antd';
import check, { IAuthorityType } from './CheckPermissions';

import AuthorizedRoute from './AuthorizedRoute';
import Secured from './Secured';

interface AuthorizedProps {
  authority: IAuthorityType;
  noMatch?: React.ReactNode;
}

type IAuthorizedType = React.FunctionComponent<AuthorizedProps> & {
  Secured: typeof Secured;
  check: typeof check;
  AuthorizedRoute: typeof AuthorizedRoute;
};

const AuthorizedTsx: React.FunctionComponent<AuthorizedProps> = ({
  children,
  authority,
  noMatch = (
    <Result status="403" title="403" subTitle="权限不足，无法访问此页面" />
  ),
}) => {
  const childrenRender: React.ReactNode =
    typeof children === 'undefined' ? null : children;
  const dom = check(authority, childrenRender, noMatch);
  return <>{dom}</>;
};

export default AuthorizedTsx as IAuthorizedType;
