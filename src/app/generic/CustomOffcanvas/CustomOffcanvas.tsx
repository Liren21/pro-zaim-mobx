// import React, {useState} from 'react'
// import {observer} from 'mobx-react-lite'
// import {Button, Nav, Offcanvas} from 'react-bootstrap'
// import routes from "../../lib/routes";
// import {nanoid} from "nanoid";
//
// interface ICOffcanvas {
//     title: string
//     url?: string
//     icon: any
// }
//
// export default observer(({ icon}: ICOffcanvas) => {
//     const [show, setShow] = useState(false);
//
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const data = [
//         {
//             title: '  Выгодные предложения',
//             href: '#' + routes.PROFITABLE_OFFERS,
//             icon: <CashCoin className={'icons'}/>,
//         },
//         {
//             title: ' Что нового',
//             href: '#' + routes.UPD_COMP,
//             icon: <QuestionCircle className={'icons'}/>,
//         },
//         // {
//         //     title: ' Связь с разработчиком',
//         //     href: '#' + routes.RAPPORT,
//         //     icon: <EnvelopeCheck className={'icons'}/>,
//         // },
//     ]
//     return (
//         <>
//             <Button variant="outline-secondary" onClick={handleShow}>
//                 {icon}
//
//             </Button>
//
//             <Offcanvas show={show} placement={'end'} onHide={handleClose}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Еще</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <Nav className="justify-content-start flex-grow-1 pe-3">
//                         {
//                             data.map((d) => (
//                                 <Button key={nanoid()} onClick={handleClose} variant={'outline-dark'} href={d.href}>
//                                     {d.icon}
//                                     {d.title}
//                                 </Button>
//                             ))
//                         }
//                     </Nav>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     )
// })
