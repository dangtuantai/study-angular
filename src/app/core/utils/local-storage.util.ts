export const setTenantId = (tenantId: string) => {
  const id_token_claims_obj_data = localStorage.getItem('id_token_claims_obj');

  if (id_token_claims_obj_data) {
    const id_token_claims_obj = JSON.parse(id_token_claims_obj_data);
    const new_id_token_claims_obj_data = JSON.stringify({
      ...id_token_claims_obj,
      tenantid: tenantId,
    });
    localStorage.setItem('id_token_claims_obj', new_id_token_claims_obj_data);
  } else {
    localStorage.setItem(
      'id_token_claims_obj',
      JSON.stringify({
        tenantid: tenantId,
      }),
    );
  }
};

export const setTenantIdIfNull = (tenantId: string) => {
  const id_token_claims_obj_data = localStorage.getItem('id_token_claims_obj');

  if (id_token_claims_obj_data) {
    const id_token_claims_obj = JSON.parse(id_token_claims_obj_data);
    // tenantId is null
    if (!id_token_claims_obj.tenantid) {
      const new_id_token_claims_obj_data = JSON.stringify({
        ...id_token_claims_obj,
        tenantid: tenantId,
      });
      localStorage.setItem('id_token_claims_obj', new_id_token_claims_obj_data);
    }
  } else {
    localStorage.setItem(
      'id_token_claims_obj',
      JSON.stringify({
        tenantid: tenantId,
      }),
    );
  }
};

export const getTenantId = (): string | undefined => {
  const id_token_claims_obj_data = localStorage.getItem('id_token_claims_obj');
  
  if(id_token_claims_obj_data) {
    const id_token_claims_obj = JSON.parse(id_token_claims_obj_data);
    if(id_token_claims_obj) {
      return id_token_claims_obj.tenantid;
    }
  }

  return undefined;
}

export const setSubject = (subject: string) => {
  const id_token_claims_obj_data = localStorage.getItem('id_token_claims_obj');

  if (id_token_claims_obj_data) {
    const id_token_claims_obj = JSON.parse(id_token_claims_obj_data);
    const new_id_token_claims_obj_data = JSON.stringify({
      ...id_token_claims_obj,
      sub: subject,
    });
    localStorage.setItem('id_token_claims_obj', new_id_token_claims_obj_data);
  } else {
    localStorage.setItem(
      'id_token_claims_obj',
      JSON.stringify({
        sub: subject,
      }),
    );
  }
}

export const getSubject = (): string | undefined => {
  const id_token_claims_obj_data = localStorage.getItem('id_token_claims_obj');
  
  if(id_token_claims_obj_data) {
    const id_token_claims_obj = JSON.parse(id_token_claims_obj_data);
    if(id_token_claims_obj) {
      return id_token_claims_obj.sub;
    }
  }

  return undefined;
}