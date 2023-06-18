import React, { Component } from "react";

export default class TambahCatatan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 60,
    };
  }

  onTitleChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.limit),
      };
    });
  };

  onBodyChangeEventHandler = (event) => {
    this.setState(() => {
        return {
            body: event.target.value
        }
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addDatas(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  };

  render() {
    return (
      <form className="mx-auto my-5 h-[24rem] border md:w-[30rem] w-[22rem] p-4" onSubmit={this.onSubmitEventHandler}>
        <div className="mx-auto ">
          <div className="mb-6">
            <div className="flex justify-between">
                <h1 className="text-xl font-medium ">Judul</h1>
              <label htmlFor="judul" className="block">
                <span className="text-sm text-slate-500 ">
                  {this.state.limit - this.state.title.length} Sisa Karakter
                </span>
              </label>
            </div>
            <input
              type="text"
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
              id="title"
              className="md:w-[28rem] w-[20rem] p-3 rounded-lg border-2 border-black text-slate-600"
              placeholder="Tulis Judul Disini..."
            />
          </div>
          <div className="mb-6">
            <label htmlFor="catatan" className="block text-xl font-medium my-2">
              Catatan
            </label>
            <textarea
              className="border-2 border-black md:w-[28rem] w-[20rem] p-2 rounded-lg"
              id="catatan"
              cols="30"
              rows="5"
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            ></textarea>
          </div>

          <button className="bg-black text-white md:hover:bg-transparent md:hover:ring-2 md:hover:text-black transition md:hover:ring-black p-2 w-full rounded-full">Tambah</button>
        </div>
        
      </form>
    );
  }
}
