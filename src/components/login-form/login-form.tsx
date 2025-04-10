import { Form, Input, Button } from 'antd';
import { LoginData } from 'helpers/types';
import styles from './login-form.module.scss';

type LoginFormProps = {
  onSubmit: (params: LoginData) => void;
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: LoginData) => {
    const { email, password } = values;
    onSubmit({ email, password });
  };

  return (
    <Form
      form={form}
      name="login_form"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{ email: 'test@test.ru', password: 'khro2ij3n2730' }}
      className={styles.form}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Пожалуйста, введите email' }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item shouldUpdate>
        {() => {
          const hasErrors = form
            .getFieldsError()
            .some(({ errors }) => errors.length > 0);
          const values = form.getFieldsValue();
          const isFilled = values.email && values.password;

          return (
            <Button
              type="primary"
              htmlType="submit"
              disabled={!isFilled || hasErrors}
              block
            >
              Войти
            </Button>
          );
        }}
      </Form.Item>
    </Form>
  );
};
