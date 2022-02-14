// in src/Dashboard.js
import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>A system to manage customer data.</CardContent>
    </Card>
);