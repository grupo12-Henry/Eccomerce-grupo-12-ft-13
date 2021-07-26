import React from 'react';
import ReactDom from 'react-dom';
import Loading from '../loading/Loading';

export default function LoadingModal() {
  return ReactDom.createPortal(
    <>
			<Loading />
    </>
  )
}
