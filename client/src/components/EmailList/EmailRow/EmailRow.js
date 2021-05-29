import React from 'react';
import "./EmailRow.css"
import {CheckBox, LabelImportantOutlined, StarBorderOutlined} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux";
import {selectMail} from "../../../features/mailSlice";

const EmailRow = ({title, subject, description, time, id}) => {
   const history = useHistory();
   const dispatch = useDispatch();

   const openMail = () => {
      dispatch(selectMail({id, title, subject, description, time})
      )
      history.push("/mail")
   }

   return (
      <div onClick={openMail} className={"emailRow"}>
         <div className="emailRow__options">
            <CheckBox/>
            <IconButton><StarBorderOutlined/></IconButton>
            <IconButton><LabelImportantOutlined/></IconButton>
         </div>
         <h3 className={"emailRow__title"}>{title}</h3>
         <div className="emailRow__message">
            <h4>{subject}{" "}<span className="emailRow__description">- {description}</span></h4>
         </div>
         <p className="emailRow__time">{time}</p>
      </div>
   )
}

export default EmailRow;
