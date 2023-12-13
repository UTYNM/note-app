import React from 'react';
import PropTypes from 'prop-types';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    onTitleChange(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    onBodyChange(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }
    render() {
        return (
            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    onChange={this.onTitleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    type="text"
                                    onChange={this.onBodyChange}
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export { NoteForm };