import React from "react";
import Tweet from 'react-tweet';

interface ISearchPageProps {
    data: any;
}

export const TwitterComponent = (props: ISearchPageProps) => {
    const {data} = props;
    const linkProps = {target: '_blank'};
        return <Tweet data={data} linkProps={linkProps}/>;
};