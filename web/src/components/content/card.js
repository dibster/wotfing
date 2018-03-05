import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const WfCard = props => (
  <Card>
    <CardHeader
      title={props.card.user}
      subtitle={props.card.added}
      avatar={props.card.avatar}
    />
    <CardMedia
      overlay={
        <CardTitle
          title={props.card.name}
          subtitle={props.card.tags.toString()}
        />
      }
    >
      <img src={props.card.picture} alt="" />
    </CardMedia>
    {/* <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
      pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
      interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam
      dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText> */}
    <CardActions>
      <FlatButton label="Use" />
      {/* <FlatButton label="Action2" /> */}
    </CardActions>
  </Card>
);

export default WfCard;
