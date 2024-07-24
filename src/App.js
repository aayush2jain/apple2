import logo from './logo.svg';
import './App.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {highlightsSlides} from '../src/constants/index'
import { useEffect, useRef, useState } from 'react';
import Explore from './components/Explore'
import VideoCarousel from './components/VideoCarousel';
import Homepage from './components/Homepage';
import React from 'react'
import Zoom from './components/Zoom';

const App = () => {
  return (
    <>
    <Homepage></Homepage>
    <VideoCarousel></VideoCarousel>
    <Zoom></Zoom>
    <Explore></Explore>
    
    </>
  )
}

export default App
