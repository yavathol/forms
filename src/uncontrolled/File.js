import React, {Component} from 'react';

export class File extends Component {
    handleSubmit = event => {
        event.preventDefault();
        alert(`this.fileInput.files[0].name = ${this.fileInput.files[0].name}`);
    };

    render = () => (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="file"
                        ref={input => {
                            this.fileInput = input;
                        }}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
    );
}
