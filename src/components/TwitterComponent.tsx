import React from "react";
import Tweet from 'react-tweet';

interface ISearchPageProps {
    data: any;
}

export const TwitterComponent = (props: ISearchPageProps) => {
    const {data} = props;
    const linkProps = {target: '_blank'};
        return (
            <div className='twit'>
                <Tweet data={data} linkProps={linkProps}/>
            </div>
        );
};