import { Button, message, Space } from 'antd';

export default function Test3() {
    
    const success = () => {
        message.success('This is a success message');
      };


    return(
        <Button onClick={success}>Success</Button>
    )
}