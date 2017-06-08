import React from 'react'

class Detail extends React.Component {
    render() {
        return (
            <p>Detail，url：{this.props.params.id}</p>
        )
    }
}

export default Detail
