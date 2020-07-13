use diesel_derive_enum::DbEnum;
use serde::{Deserialize, Serialize};

#[DieselType = "Account_role"]
#[derive(Serialize, Deserialize, Eq, PartialEq, Debug, Copy, Clone, DbEnum)]
pub enum AccountRole {
    Admin,
    Staff,
    User,
}
