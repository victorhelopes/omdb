import { Component, ReactNode } from 'react';
import { connect } from "react-redux"
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';


import * as MovieInfosActions from '../../store/ducks/movieInfos/actions.ts'

import { IMovieInfos } from '../../types/movies.interface.ts';
import { ApplicationState } from '../../store/index.tsx';

import { Header } from '../../components/Header/index.tsx';
import { Button, Input } from '@ui5/webcomponents-react';
import { Footer } from '../../components/Footer/index.tsx';
import { MovieInfos } from '../../components/Movie/index.tsx';

import './styles.scss'

interface StateProps {
  result: IMovieInfos | null ;
}

interface DispatchProps {
  loadRequest(data: string): void;
}

type Props = StateProps & DispatchProps 

class Home extends Component<Props, { search: string }>{
  constructor(Props: StateProps & DispatchProps ) {
    super(Props)
    this.state = {
      search: ''
    }
  }

  render(): ReactNode {  

    return(
        <div className='Home'>
        <div>
          <Header/>
          <div className='body'>
            <h2>Movie searcher</h2>
            <p>Search a film by title</p>
            <div className="search m-auto d-md-flex d-sm-block">
              <Input 
                type="Text"
                value={this.state.search}
                onChange={(value)=>{this.setState({search: value.target.value})}}
              />
              <Button className='mx-2' onClick={()=>{this.props.loadRequest(this.state.search)}}>Search</Button>
              <Button onClick={()=>{this.setState({search: "" })}}>Reset</Button>
            </div>
            {this.props.result === null ? 
              <p>No movie founded</p>:
              <MovieInfos info={this.props.result}/>
            }
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  result: state.movieInfos.result,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MovieInfosActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(Home)