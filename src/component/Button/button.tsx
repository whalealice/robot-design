import React from 'react';
import styles from './index.less'

export default class ButtonComponent extends React.Component {
    constructor(props:any) {
        super(props)
    }
    render(){
        return (
            <div className={styles.wrapper}>
                <button>ButtonComponent333</button>
                <div>1111</div>
            </div>
            
        )
    }
}