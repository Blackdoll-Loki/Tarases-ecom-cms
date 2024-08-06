import { Modal, TextContainer,InlineStack, FormLayout, Button } from '@shopify/polaris';
import {ValidatedForm} from 'remix-validated-form';
import { TUserDto } from '~/.server/admin/dto/user.dto';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import {ValidatedErrorBanner} from '~/admin/ui/ValidatedErrorBanner/ValidatedErrorBanner';
import { ValidatedSubmitButton } from '~/admin/ui/ValidatedSubmitButton/ValidatedSubmitButton';
import { userRoleValidator } from './DeleteModal.validator';


export type DeleteModalProps = {
  user: TUserDto;
  active: boolean;
  toggleModal: () => void;
}

export default function DeleteModal({user, active, toggleModal}: DeleteModalProps){
  return (
    <Modal
      open={active}
      onClose={toggleModal}
      title="Delete user"
      primaryAction={{
        destructive: true,
        content: 'Cancel',
        onAction: toggleModal,
      }}
    >
      {/*<Modal.Section>
        <TextContainer>
          Are you sure you want to delete this user? This action cannot be undone.
        </TextContainer>
        <ValidatedForm
          method="post"

          action={`${EAdminNavigation.users}/${user.id}`}
        >
          <input type="hidden" name="id" value={user.id} />
          <input type="hidden" name="actionType" value="delete" />
          <ValidatedErrorBanner name="error" />
          <Button submit={true} variant="primary" tone="critical" >
            Delete User
          </Button>
        </ValidatedForm>
      </Modal.Section>
    </Modal>*/}
      <ValidatedForm
        validator={userRoleValidator}
        method="post"
        action={`${EAdminNavigation.users}/${user.id}`}
        onSubmit={toggleModal}
      >
        <ValidatedErrorBanner />
        <Modal.Section>
          <TextContainer>
            Are you sure you want to delete this user? This action cannot be undone.
          </TextContainer>
        </Modal.Section>
        <Modal.Section>
          <FormLayout>
            <input type="hidden" name="id" value={user.id} />
            <input type="hidden" name="actionType" value="delete" />

            <Button submit={true} variant="primary" tone="critical" >
              Delete User
            </Button>
          </FormLayout>
        </Modal.Section>
    </ValidatedForm>
    </Modal>
  );
}
